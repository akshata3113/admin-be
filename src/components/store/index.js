import { createStore } from 'vuex';

export default createStore({
  state: {
    jobs: [],
    applications: [],
    users: [],
  },
  mutations: {
    ADD_JOB(state, job) {
      state.jobs.push(job);
    },
    ADD_APPLICATION(state, application) {
      state.applications.push(application);
    },
    UPDATE_APPLICATION_STATUS(state, { id, status }) {
      const app = state.applications.find((a) => a.id === id);
      if (app) app.status = status;
    },
  },
  actions: {
    addJob({ commit }, job) {
      commit('ADD_JOB', job);
    },
    addApplication({ commit }, application) {
      commit('ADD_APPLICATION', application);
    },
    updateApplicationStatus({ commit }, payload) {
      commit('UPDATE_APPLICATION_STATUS', payload);
    },
  },
  getters: {
    totalJobs(state) {
      return state.jobs.length;
    },
    totalApplications(state) {
      return state.applications.length;
    },
    pendingApplications(state) {
      return state.applications.filter((a) => a.status === 'Pending').length;
    },
  },
});
