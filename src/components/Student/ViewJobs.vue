<template>
  <div>
    <h2>Available Jobs</h2>
    <div v-for="job in jobs" :key="job.id">
      <h3>{{ job.jobTitle }}</h3>
      <p>{{ job.jobDescription }}</p>
      <button @click="applyJob(job.id)">Apply</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [] // Fetched from the backend
    };
  },
  methods: {
    applyJob(jobId) {
      this.$router.push({ name: "applyJob", params: { jobId } });
    }
  },
  mounted() {
    // Fetch jobs from backend
    this.jobs = [
      { id: 1, jobTitle: "Software Developer", jobDescription: "Develop software..." },
      { id: 2, jobTitle: "Data Analyst", jobDescription: "Analyze data..." }
    ];
  }
};
</script>
