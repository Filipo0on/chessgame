// tslint:disable:object-literal-sort-keys
import * as React from "react";

import { Chessground as NativeChessground } from "chessground";
import * as PropTypes from "prop-types";

export default class Chessground extends React.Component<any, any> {
  public static propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fen: PropTypes.string,
    orientation: PropTypes.string,
    turnColor: PropTypes.string,
    check: PropTypes.string,
    lastMove: PropTypes.array,
    selected: PropTypes.string,
    coordinates: PropTypes.bool,
    autoCastle: PropTypes.bool,
    viewOnly: PropTypes.bool,
    disableContextMenu: PropTypes.bool,
    resizable: PropTypes.bool,
    addPieceZIndex: PropTypes.bool,
    hightlight: PropTypes.object,
    animation: PropTypes.object,
    movable: PropTypes.object,
    premovable: PropTypes.object,
    predroppable: PropTypes.object,
    draggable: PropTypes.object,
    selectable: PropTypes.object,
    onChange: PropTypes.func,
    onMove: PropTypes.func,
    onDropNewPiece: PropTypes.func,
    onSelect: PropTypes.func,
    items: PropTypes.object,
    drawable: PropTypes.object
  };

//   private static defaultProps = {
//     coordinates: true,
//     resizable: true,
//     hightlight: {
//       lastMove: true,
//       check: true
//     }
//   };

  public el: any;
  public cg: any;
  public config: any;

  public buildConfigFromProps(props: any) {
    const config = { events: {} };
    Object.keys(Chessground.propTypes).forEach(k => {
      const v = props[k];
      if (v) {
        const match = k.match(/^on([A-Z]\S*)/);
        if (match) {
          config.events[match[1].toLowerCase()] = v;
        } else {
          config[k] = v;
        }
      }
    });
    return config;
  }
  public componentDidMount() {
    this.cg = NativeChessground(this.el, this.buildConfigFromProps(this.props));
  }

  public componentWillReceiveProps(nextProps: any) {
    this.cg.set(this.buildConfigFromProps(nextProps));
  }

  public componentWillUnmount() {
    this.cg.destroy();
  }

  public render() {
    const props = { style: { ...this.props.style } };
    if (this.props.width) {
      props.style.width = this.props.width;
    }
    if (this.props.height) {
      props.style.height = this.props.height;
    }
    return <div ref={el => (this.el = el)} {...props} />;
  }
}
