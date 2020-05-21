const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETUSERSTOTALCOUNT = 'SETUSERSTOTALCOUNT';
const TOGGLEISFETCHING = 'TOGGLEISFETCHING';


let initialState = {
  users: [
    // { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRatGT24fc8BoKqkz8Zrlo53XLE5i6sR6ONEvbLAtJ1oavZmtQl&usqp=CAU', status: 'My name is Ygenii', fullName: 'Kolia', followed: false, location: { city: 'Kiev', country: 'Ukranian' } },
    // { id: 2, photoUrl: 'https://i1.sndcdn.com/avatars-000585214056-m8plu9-t500x500.jpg', status: 'I like butterfly', fullName: 'Ylii', followed: true, location: { city: 'Obolon', country: 'Ukranian' } },
    // { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRatGT24fc8BoKqkz8Zrlo53XLE5i6sR6ONEvbLAtJ1oavZmtQl&usqp=CAU', status: 'i was be girl', fullName: 'Nazar', followed: true, location: { city: 'Kiev', country: 'Ukranian' } }
  ],
  pageSize: 30,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    

    case FOLLOW: {
      return {
        ...state,
        users: 
         state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
            return u;
          })
        }
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SETUSERS:
      console.log ('props in Users', state.users)
      console.log ('action in Users', action.users)
      return { ...state, users: action.users }

      case SETCURRENTPAGE:
      return { ...state, currentPage: action.currentPage }

      case SETUSERSTOTALCOUNT:
      return { ...state, totalUsersCount: action.totalCount }

      case TOGGLEISFETCHING:
      return { ...state, isFetching: action.isFetching }

    default:
      return state;
      
  }
}

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}
export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}
export const setUsersAC = (users) => {
  return {
    type: SETUSERS,
    users: users
  }
}
export const setCurrentPagesAC = (page) => {
  return {
    type: SETCURRENTPAGE,
    currentPage: page
  }
}
export const setUsersTotalCountAC = (totalCount) => {
  return {
    type: SETUSERSTOTALCOUNT,
    totalCount: totalCount
  }
}

export const setIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLEISFETCHING,
    isFetching: isFetching
  }
}

export default usersReduser;