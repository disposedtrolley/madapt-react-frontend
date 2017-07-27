import React, { Component } from 'react'
import axios from 'axios'
import Tabs from 'react-responsive-tabs'
import Iframe from 'react-iframe'
import 'react-responsive-tabs/styles.css'

class ContentPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData()
    }
    this.getTabs = this.getTabs.bind(this)
  }
  
  getData() {
    // get data from JSON
    axios.get(this.props.filePath)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  
  getTabs() {
    var data = this.state.data
    return data.map(item => ({
      tabClassName: 'tab',
      panelClassName: 'panel',
      title: item.title,
      getContent: () => {
        return (
          <div>
            <div className='tabContent' dangerouslySetInnerHTML={{__html: item.text}} />
            {item.video && <Iframe     
                            url={item.video}
                            width="560px"
                            height="315px"
                            position="relative"
                            allowFullScreen />}
            <div className='tabLinks'>
              {item.links && item.links.map(link => {
                return <div><a href={link.url}>{link.title}</a><br/></div>
              })}
            </div>
          </div>
        )
      },
    }));
  }
  render() {
    var data = this.state.data
    return (
      <div className="wrapper">
        <h1>{data && data.title}</h1>
        {data && data.summary}
        {data && data.topLevelVideo && <Iframe     
                            url={data.topLevelVideo}
                            width="560px"
                            height="315px"
                            position="relative"
                            allowFullScreen />}
        {data && data.tab && <Tabs items={this.getTabs()} />}
      </div>
    )
  }
}
export default ContentPageContainer