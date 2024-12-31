<template>
  <div class="job-form">
    <h2>Add New Job</h2>
    <form @submit.prevent="submitForm">
      <!-- Job Title -->
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" v-model="job.jobTitle" required />
      </div>
      <!-- Other fields omitted for brevity, same as in the previous response -->
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {
        jobTitle: "",
        jobDescription: "",
        jobType: "Full-time",
        noOfOpenings: 1,
        salary: "",
        jobLocation: "",
        workMode: "On-site",
        eligibility: "",
        degree: null,
        branch: "",
        year: 2024,
        skills: "",
        recruitmentProcess: "",
        timeline: "",
        companyName: "",
        applicationDeadline: null,
        howToApply: null,
        status: "Active"
      },
    };
  },
  methods: {
    submitForm() {
      // Submit the job details (make API call)
      console.log("Job submitted: ", this.job);
    },
  },
};
</script>
