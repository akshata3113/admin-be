<template>
  <div>
    <h1>Admin Dashboard</h1>
    <div class="dashboard-stats">
      <div>Total Jobs: {{ stats.totalJobs }}</div>
      <div>Total Applications: {{ stats.totalApplications }}</div>
      <div>Pending Applications: {{ stats.pendingApplications }}</div>
    </div>
    <div class="actions">
      <router-link to="/admin/add-job">Add Job</router-link>
      <router-link to="/admin/manage-applications">Manage Applications</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats: {
        totalJobs: 50,
        totalApplications: 200,
        pendingApplications: 50,
      },
    };
  },
};
</script>
