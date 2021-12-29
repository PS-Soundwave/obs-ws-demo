import type { NextPage } from 'next'
import ObsWebSocket from 'obs-websocket-js'

const Home: NextPage = () => {
  const click = async () => {
    const obs = new ObsWebSocket();
    await obs.connect({ address: "localhost:4444", password: "whatsapassword" })
    await obs.send("CreateScene", { sceneName: "OwO" })
    await obs.send("CreateSource", { sourceName: "UwU", sourceKind: "browser_source", sceneName: "OwO", sourceSettings: { css: "body { margin: 0px auto; overflow: hidden; }", fps: 60, fps_custom: true, height: 1080, url: "https://round.t3.gg/call/soundwave/embed?view=ckuexh8a40008sov9jnzs1naq", width: 1920}})
    const settings = await obs.send("GetSourceSettings", { sourceName: "UwU" })
    const otherSettings = await obs.send("GetSourceDefaultSettings", { sourceKind: "browser_source" })
    console.log(settings.sourceSettings)
    console.log(otherSettings)
    await obs.disconnect()
  }

  return (
    <button onClick={click}>
      Spy on Soundwave
    </button>
  )
}

export default Home
