import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // count: 0,
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' }
      ],
      profile: {
        name: '你的名字',
        city: '当前所在地',
        title: '申请职位',
        birthday: '你的生日'
      },
      workHistory: [
        {
          company: '公司名称',
          content: `工作内容描述`
        },
        {
          company: '公司名称',
          content: `工作内容描述`
        }
      ],
      education: [{ school: '学校名称', content: '学位' }, { school: '北京大学' }],
      projects: [
        { name: 'project A', content: '描述' },
        { name: 'project B', content: '描述' }
      ],
      awards: [
        { name: '奖项名称', content: '描述' },
        { name: '奖项名称', content: '描述' }
      ],
      contacts: [
        { contact: '你的电话', content: '1xxxxxxxxxx' },
        { contact: '其他联系方式', content: '~~~' }
      ]
    }
  },
  mutations: {
    initState(state, payload) {
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, { path, value }) {
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
    },
    setUser(state, payload) {
      Object.assign(state.user, payload)
    },
    removeUser(state) {
      state.user.id = ''
    }
  }
})
