<template>
  <div>
    <h2>Apply for Job</h2>
    <form @submit.prevent="submitApplication">
      <label for="resume">Upload Resume</label>
      <input type="file" id="resume" @change="handleFileUpload" />
      <button type="submit">Submit Application</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resume: null,
      jobId: this.$route.params.jobId
    };
  },
  methods: {
    handleFileUpload(event) {
      this.resume = event.target.files[0];
    },
    submitApplication() {
      console.log("Submitting application for job:", this.jobId);
      console.log("Resume file:", this.resume);
      // Send application data to the backend
    }
  }
};
</script>
