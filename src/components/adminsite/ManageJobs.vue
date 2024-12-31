<template>
  <div>
    <h2>Manage Jobs</h2>
    <table>
      <thead>
        <tr>
          <th>Job Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="job in jobs" :key="job.id">
          <td>{{ job.jobTitle }}</td>
          <td>{{ job.status }}</td>
          <td><button @click="editJob(job.id)">Edit</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [] // This will be fetched from the backend
    };
  },
  methods: {
    editJob(jobId) {
      // Navigate to edit job page
      this.$router.push({ name: "editJob", params: { id: jobId } });
    }
  },
  mounted() {
    // Fetch jobs from backend
    this.jobs = [
      { id: 1, jobTitle: "Software Developer", status: "Active" },
      { id: 2, jobTitle: "Data Analyst", status: "Closed" }
    ];
  }
};
</script>
