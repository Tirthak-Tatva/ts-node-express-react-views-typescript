import * as React from 'react'

interface Props {
  msg: string
}

export default class extends React.Component<Props> {
  render() {
    return (
      <h1>{this.props.msg}</h1>
    )
  }
}
