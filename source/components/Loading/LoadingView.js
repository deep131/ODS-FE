import React, { Component } from 'react';

import { Overlay } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { Animated, View } from 'react-native';
import { colors } from '../../styles/variables';

let progressSize = 56;

class LoadingView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Overlay
        overlayStyle={{
          justifyContent: 'center',
          position: 'absolute',
          zIndex: 100,
          height: '100%',
          width: '100%',
          backgroundColor: colors.loaderBGColor,
          shadowColor: 'transparent',
        }}
        fullScreen={true}
        overlayBackgroundColor="transparent"
        isVisible={this.props.showProgressDialog}
        width="auto"
        height="auto"
        supportedOrientations={['portrait', 'landscape']}>
        <Animated.View
          style={{
            zIndex: 2,
            backgroundColor: 'white',
            padding: 6,
            borderRadius: progressSize,
            alignSelf: 'center',
          }}>
          <Progress.CircleSnail
            size={progressSize}
            indeterminate={true}
            thickness={4}
            duration={500}
            strokeCap={'round'}
            style={{ alignSelf: 'center' }}
            color={[colors.primary]}
          />
        </Animated.View>
      </Overlay>
    );
  }
}

export default LoadingView;
