"use server";

import { revalidatePath } from "next/cache";
import dbConnect from "@/lib/db";
import Team from "@/models/team.model";

export async function getTeamMembers() {
  try {
    await dbConnect();
    const teamMembers = await Team.find({}).lean();
    const serializedTeamMembers = teamMembers.map((member) => {
      return {
        ...member,
        _id: member?._id?.toString(),
      };
    });
    return { success: true, data: serializedTeamMembers };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getTeamMemberById(id) {
  try {
    await dbConnect();
    const teamMember = await Team.findById(id).lean();
    if (!teamMember) {
      return { success: false, error: "Team member not found" };
    }
    const serializedTeamMember = {
      ...teamMember,
      _id: teamMember?._id?.toString(),
    };
    return { success: true, data: serializedTeamMember };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function createTeamMember(formData) {
  try {
    await dbConnect();
    const teamMember = new Team(formData);
    await teamMember.save();
    revalidatePath("/life-backend/team");
    revalidatePath("/meet-the-team");
    return { success: true };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function updateTeamMember(id, formData) {
  try {
    await dbConnect();
    await Team.findByIdAndUpdate(id, formData);
    revalidatePath("/life-backend/team");
    revalidatePath("/meet-the-team");
    return { success: true };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function deleteTeamMember(id) {
  try {
    await dbConnect();
    await Team.findByIdAndDelete(id);
    revalidatePath("/life-backend/team");
    revalidatePath("/meet-the-team");
    return { success: true };
  } catch (error) {
    if (error) {
      return { success: false, error: error.message };
    }
    return { success: false, error: "An unexpected error occurred" };
  }
}
