<template>
  <div>
    <h2>Manage Applications</h2>
    <table>
      <thead>
        <tr>
          <th>Application ID</th>
          <th>Student Name</th>
          <th>Job Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in applications" :key="application.id">
          <td>{{ application.id }}</td>
          <td>{{ application.studentName }}</td>
          <td>{{ application.jobTitle }}</td>
          <td>{{ application.status }}</td>
          <td>
            <button @click="approveApplication(application.id)">Approve</button>
            <button @click="rejectApplication(application.id)">Reject</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applications: [
        { id: 1, studentName: "John Doe", jobTitle: "Software Developer", status: "Pending" },
        { id: 2, studentName: "Jane Smith", jobTitle: "Data Analyst", status: "Pending" },
      ],
    };
  },
  methods: {
    approveApplication(id) {
      const app = this.applications.find((a) => a.id === id);
      if (app) app.status = "Approved";
    },
    rejectApplication(id) {
      const app = this.applications.find((a) => a.id === id);
      if (app) app.status = "Rejected";
    },
  },
};
</script>
