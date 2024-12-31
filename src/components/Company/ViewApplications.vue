<template>
  <div>
    <h2>Applications</h2>
    <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in applications" :key="application.id">
          <td>{{ application.studentName }}</td>
          <td>{{ application.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applications: [] // Fetched from the backend
    };
  },
  mounted() {
    // Fetch applications for the job posted by the company
    this.applications = [
      { id: 1, studentName: "John Doe", status: "Under Review" },
      { id: 2, studentName: "Jane Smith", status: "Accepted" }
    ];
  }
};
</script>
