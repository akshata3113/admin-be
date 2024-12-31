<template>
  <div>
    <h2>Post a Job</h2>
    <form @submit.prevent="submitJob">
      <label for="jobTitle">Job Title</label>
      <input type="text" id="jobTitle" v-model="job.jobTitle" />
      <button type="submit">Post Job</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: {
        jobTitle: "",
        jobDescription: ""
      }
    };
  },
  methods: {
    submitJob() {
      console.log("Job posted:", this.job);
      // Send the job data to backend to post the job
    }
  }
};
</script>
