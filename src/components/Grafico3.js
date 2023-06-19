import React, { PureComponent } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea, ResponsiveContainer, } from 'recharts';

const initialData = [
  { time: 1, value: 450 },
  { time: 2, value: 239 },
  { time: 3, value: 137 },
  { time: 4, value: 116 },
  { time: 5, value: 229 },
  { time: 6, value: 350 },
  { time: 7, value: 353 },
  { time: 8, value: 252 },
  { time: 9, value: 179 },
  { time: 10, value: 294 },
  { time: 11, value: 343 },
  { time: 12, value: 441 },
  { time: 13, value: 221 },
  { time: 14, value: 280 },
  { time: 15, value: 100 },
  { time: 16, value: 390 },
  { time: 17, value: 300 },
  { time: 18, value: 200 },
  { time: 19, value: 350 },
  { time: 20, value: 170 },
];
/*
const initialData = [
  { time: "10:00", value: 450 },
  { time: "10:03", value: 239 },
  { time: "10:06", value: 137 },
  { time: "10:09", value: 116 },
  { time: "10:12", value: 229 },
  { time: "10:15", value: 350 },
  { time: "10:18", value: 353 },
  { time: "10:21", value: 252 },
  { time: "10:24", value: 179 },
  { time: "10:27", value: 294 },
  { time: "10:30", value: 343 },
  { time: "10:33", value: 441 },
  { time: "10:36", value: 221 },
  { time: "10:39", value: 280 },
  { time: "10:42", value: 100 },
  { time: "10:45", value: 390 },
  { time: "10:48", value: 300 },
  { time: "10:51", value: 200 },
  { time: "10:54", value: 350 },
  { time: "10:57", value: 170 },
];*/
const initialState = {
  data: initialData,
  left: 'dataMin',
  right: 'dataMax',
  refAreaLeft: '',
  refAreaRight: '',
  animation: true,
};

export default class Grafico3 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/highlight-zomm-line-chart-v77bt';

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  zoom() {
    let { refAreaLeft, refAreaRight } = this.state;
    const { data } = this.state;

    if (refAreaLeft === refAreaRight || refAreaRight === '') {
      this.setState(() => ({
        refAreaLeft: '',
        refAreaRight: '',
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight) [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    this.setState(() => ({
      refAreaLeft: '',
      refAreaRight: '',
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
    }));
  }

  zoomOut() {
    const { data } = this.state;
    this.setState(() => ({
      data: data.slice(),
      refAreaLeft: '',
      refAreaRight: '',
      left: 'dataMin',
      right: 'dataMax',
    }));
  }

  render() {
    const { data, left, right, refAreaLeft, refAreaRight, } = this.state;

    return (
      <div classtime="highlight-bar-charts" style={{ userSelect: 'none', width: '100%', textAlign:"center", paddingTop:"20px" }}>
        <button type="button" classtime="btn update" onClick={this.zoomOut.bind(this)}>
          ver Gráfico Sin Zoom
        </button>

        <ResponsiveContainer width="95%" height={300}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={(e) => this.setState({ refAreaLeft: e.activeLabel })}
            onMouseMove={(e) => this.state.refAreaLeft && this.setState({ refAreaRight: e.activeLabel })}
            onMouseUp={this.zoom.bind(this)}
          >
            <CartesianGrid strokeDasharray="3 3" vertical="" horizontal=""/>
            <XAxis allowDataOverflow dataKey="time" domain={[left, right]} type="number"/>
            <YAxis allowDataOverflow domain={[0, 500]} type="number" yAxisId="1" />
            <Tooltip />
            <Line yAxisId="1" type="natural" dataKey="value" stroke="#8884d8" animationDuration={300} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}