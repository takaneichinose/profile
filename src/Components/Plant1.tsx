import { Assets, Texture } from 'pixi.js';
import React from 'react';

import { Object } from '@/Components/Object';
import { PLANT1_OBJECT_DATA } from '@/Constants/Objects';

import plantImage from '/assets/images/my-profile-plant.png';

/**
 * Component of the plant1 object
 * @returns {React.ReactElement}
 */
export function Plant1(): React.ReactElement {
  const texture: Texture | undefined = Assets.get(plantImage);

  if (texture === undefined) {
    return <React.Fragment />;
  }

  return <Object texture={texture} objectData={PLANT1_OBJECT_DATA} />;
}
