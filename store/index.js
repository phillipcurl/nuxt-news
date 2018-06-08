export const state = () => ({
  date: Date.now(),
  currentPageTitle: '',
  sidebarOpen: true
});

export const actions = {
  openMenu({ commit }) {
    commit('OPEN_MENU');
  },
  closeMenu({ commit }) {
    commit('CLOSE_MENU');
  },
  toggleMenu({ commit }) {
    commit('TOGGLE_MENU');
  },
  setPageTitleText({ commit }, text) {
    commit('SET_PAGE_TITLE_TEXT', text);
  }
};

export const mutations = {
  OPEN_MENU(state) {
    state.sidebarOpen = true;
  },
  CLOSE_MENU(state) {
    if (state.sidebarOpen) {
      state.sidebarOpen = false;
    }
  },
  TOGGLE_MENU(state) {
    state.sidebarOpen = !state.sidebarOpen;
  },
  SET_PAGE_TITLE_TEXT(state, value) {
    state.currentPageTitle = value.trim();
  }
};

export const getters = {
  sidebarOpen(state) {
    return state.sidebarOpen;
  },
  pageTitleText(state) {
    return state.currentPageTitle;
  }
};
