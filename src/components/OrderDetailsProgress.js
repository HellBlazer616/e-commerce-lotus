import React from 'react';
import { Steps } from 'antd';
import styled from '@emotion/styled';
import useWindowDimension from '../utils/customHooks/useWindowDimension';

const { Step } = Steps;

const OrderDetailsProgress = () => {
  const { width } = useWindowDimension();
  return (
    <article className="order__details__progress">
      <Steps
        className="order__details__steps"
        direction={width < 800 ? 'vertical' : 'horizontal'}
        current={1}
      >
        <Step title="Finished" description="Order Received" />
        <Step
          title="In Progress"
          subTitle="Left 00:00:08"
          description="Order on the way"
        />
        <Step title="Waiting" description="Order Delivered" />
      </Steps>
    </article>
  );
};

const OrderDetailsProgressItem = styled``;

export default OrderDetailsProgress;
