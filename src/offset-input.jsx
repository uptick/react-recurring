import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './offset-input.css'

class OffsetInput extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      mode: 'A',
      count: 1,
      period: 'D',
    };
  }

  componentDidMount() {
    let { value } = this.props || '';
    ::this.setValue( value );
  }

  setValue( value ) {
    if( !value )
      return;
    let match = value.match( /^(A|B|C|N|P);(D|W|M);(-?\d+);$/m );
    if( match ) {
      this.setState({
        mode: match[1],
        period: match[2],
        count: match[3]
      });
    }
  }

  getOrdinal( n ) {
    let s = [ 'th','st','nd','rd' ];
    let v = n%100;
    return n + (s[(v - 20)%10] || s[v] || s[0]);
  }

  getValue() {
    const { mode, count, period } = this.state || {};
    return `${mode};${period};${count};`;
  }

  handleModeChange( event ) {
    this.setState({ mode: event.target.value });
  }

  handleCountChange( event ) {
    this.setState({ count: event.target.value });
  }

  handlePeriodChange( event ) {
    this.setState({ period: event.target.value });
  }

  render() {
    const { mode, count, period } = this.state;

    let content = [];
    if( mode == 'A' || mode == 'B' ) {
      content = [
        <input className={ classNames( 'form-control', styles.count ) } type="text" placeholder="Count"
               onChange={ ::this.handleCountChange } value={ count } key="1" />,
        <select className={ classNames( 'form-control', styles.period ) } onChange={ ::this.handlePeriodChange }
                value={ period } key="2">
          <option value="D">{ count == 1 ? 'day' : 'days' }</option>
          <option value="W">{ count == 1 ? 'week' : 'weeks' }</option>
          <option value="M">{ count == 1 ? 'month' : 'months' }</option>
        </select>
      ];
    }
    else {
      const days = []
      let dayIndex = 1
      while (dayIndex <= 28) {
        days.push(dayIndex)
        dayIndex++
      }

      content = [
        <select className={ classNames( 'form-control', styles.count ) } key="3"
                onChange={ ::this.handleCountChange } value={ count }>
          { days.map( ii => (
              <option value={ ii }>{ this.getOrdinal( ii ) }</option>
            ))}
          <option value="-1">last</option>
          { days.slice(1).map( ii => (
              <option value={ -ii }>{ this.getOrdinal( ii ) } last</option>
            ))}
        </select>,
        <span key="4"> day</span>
      ];
    }

    return (
      <div>
        { content.map( elem => elem ) }
        <select className={ classNames( 'form-control', styles.mode ) } onChange={ ::this.handleModeChange }
                value={ mode }>
          <option value="A">after</option>
          <option value="B">before</option>
          <option value="C">of month</option>
          <option value="N">of next month</option>
          <option value="P">of previous month</option>
        </select>
        { this.renderHidden() }
      </div>
    );
  }

  renderHidden() {
    const { name } = this.props;
    return <input type="hidden" name={ name } value={ ::this.getValue() } />;
  }
}

export default OffsetInput
