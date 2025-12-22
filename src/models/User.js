import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false, // security best practice
    },
  },
  { timestamps: true }
);

/**
 * ✅ Async middleware — NO next()
 */
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  if (typeof this.password !== "string" || !this.password) {
    throw new Error("Invalid password");
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

/**
 * ✅ Instance method
 */
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User =
  mongoose.models.User || mongoose.model("User", userSchema);
