import style from './timeLine.module.css'


export default function TimeLine(props) {
  // const getServeSideProps = () => {
  //   api.get("users").then(res => {
  //     const 
  //   })
  // }
  // getServeSideProps()

  const playListNames = Object.keys(props.playlists)
  return (
    <div className={style.timeLine}>
      {playListNames.map((playListNames) => {
        const videos = props.playlists[playListNames]

        return (
          <div className={style.section}>
            <h2 className={style.h2}>
              {playListNames}
            </h2>

            <div className={style.gridVideos}>
              {videos.filter((video) => {
                const titleNormalize = video.title.toLowerCase()
                const searchValueNormalized = props.filterValue.toLowerCase()
                return titleNormalize.includes(searchValueNormalized)

              }).map((videos) => {
                return (
                  <a className={style.a} href={videos.url}>
                    <img className={style.img} src={videos.thumb} />
                    <span className={style.span}>{videos.title}</span>
                  </a>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}



// export const getServeSideProps = async () => {

//   const [userResponse, playResponse] = await Promise.all([
//     api.get("users"),
//     api.get("playList")
//   ])
//   return {
//     props: {
//       users: userResponse,
//       playlist: playResponse,
//     },
//   }
// }