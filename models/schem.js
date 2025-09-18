import mongoose from "mongoose";

/* ----------------- Student Schema ----------------- */
const studentSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true, 
    trim: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true 
},
  enrollmentDate: { 
    type: Date, 
    default: Date.now 
},
  courses: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",   // References the Course model
  }
]

});

const Student = mongoose.model("Student", studentSchema);

/* ----------------- Course Schema ----------------- */
const courseSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  description: {
    type: String 
},
  durationWeeks: { 
    type: Number, 
    required: true 
},
  instructor: { 
    type: String, 
    required: true 
}
});

const Course = mongoose.model("Course", courseSchema);

/* ----------------- Exports ----------------- */
export { Student, Course };
