export const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    return document.documentElement.requestFullscreen()
  }
  document.exitFullscreen()
}
