import React from 'react';
import Header from "../../components/Headers/Header.jsx";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import PlayArrow from '@material-ui/icons/PlayArrow';
import RightIcon from '@material-ui/icons/ArrowRightAlt';
import LeftIcon from '@material-ui/icons/ArrowLeft';

const urls = [
  "https://www.liquidmindmusic.com/mp3/Reflection.mp3",
  "https://www.liquidmindmusic.com/mp3/meditation.mp3",
  "https://www.liquidmindmusic.com/mp3/Serenity.mp3",
  "https://www.liquidmindmusic.com/mp3/breatheinme.mp3",
]

class Music extends React.Component {
  state = {
    isPlaying: false,
    urlIndex: 0,
  }

  componentDidMount() {
    this.audioEl = document.getElementsByClassName("audio-element")[0]
    // this.audioEl.play()
    this.audioEl.src = urls[0];
  }

  handlePlay = () => {
    const {isPlaying} = this.state;
    if (isPlaying) {
      this.audioEl.pause();
    } else {
      this.audioEl.play();
    }

    this.setState(state => {return {isPlaying: !state.isPlaying}});
  }

  changeUrl = (type) => {
    let {urlIndex} = this.state;
    if (type === 'left') {
      urlIndex = urlIndex - 1;
      if (urlIndex < 0) {
        urlIndex = urls.length - 1;
      }
    } else if (type === 'right') {
      urlIndex = urlIndex + 1;
      if (urlIndex === urls.length) {
        urlIndex = 0;
      }
    }
    this.audioEl.src=urls[urlIndex];
    this.audioEl.load();
    this.audioEl.play();
    this.setState({urlIndex: urlIndex});
  }

  changeUrlByIndex = (index) => {
    this.audioEl.src=urls[index];
    this.audioEl.load();
    this.audioEl.play();
    this.setState({urlIndex: index})
  }

  render() {
    const {url, urlIndex} = this.state;
    return (
      <div>
        <Header />
        <div style={{display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column'}}>
          <div style={styles.audio}>
            <div style={styles.player}>
              <div style={{flex: 1}}>
                <IconButton
                  style={{margin: 7}}
                  onClick={this.handlePlay}
                >
                  {/* {notificationStatus ? <NotificationImportantIcon /> : <NotificationsNoneIcon />} */}
                  <Badge color="secondary">
                    <PlayArrow />
                  </Badge>
                </IconButton>
              </div>
              <audio className="audio-element">
                <source src={url}></source>
              </audio>
              <IconButton
                style={{margin: 7}}
                onClick={() => this.changeUrl('left')}
              >
                {/* {notificationStatus ? <NotificationImportantIcon /> : <NotificationsNoneIcon />} */}
                <Badge color="secondary">
                  <LeftIcon />
                </Badge>
            </IconButton>
              <IconButton
                style={{margin: 7}}
                onClick={() => this.changeUrl('right')}
              >
                {/* {notificationStatus ? <NotificationImportantIcon /> : <NotificationsNoneIcon />} */}
                <Badge color="secondary">
                  <RightIcon />
                </Badge>
            </IconButton>
            </div>
          </div>
          <List style={{width: 600, margin: 15}}>
            <ListItem style={{backgroundColor: '#FAFAFA', padding: 30}} onClick={() => this.changeUrlByIndex(0)}>
              <ListItemText style={{textAlign: 'center', color: urlIndex === 0 ? 'green' : 'black'}}>FIRST</ListItemText>
            </ListItem>
            <ListItem style={{backgroundColor: '#E3F2FD', padding: 30}} onClick={() => this.changeUrlByIndex(1)}>
              <ListItemText style={{textAlign: 'center', color: urlIndex === 1 ? 'green' : 'black'}}>SECOND</ListItemText>
            </ListItem>
            <ListItem style={{backgroundColor: '#FAFAFA', padding: 30}} onClick={() => this.changeUrlByIndex(2)}>
              <ListItemText style={{textAlign: 'center', color: urlIndex === 2 ? 'green' : 'black'}}>THIRD</ListItemText>
            </ListItem>
            <ListItem style={{backgroundColor: '#E3F2FD', padding: 30}} onClick={() => this.changeUrlByIndex(3)}>
              <ListItemText style={{textAlign: 'center', color: urlIndex === 3 ? 'green' : 'black'}}>FOURTH</ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  audio: {
    margin: 15,
  },
  player: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    width: 352,
    height: 64,
    backgroundColor: "#63CCCA",
    borderRadius: 32,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#397367',
  }
}

//https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3
export default Music;