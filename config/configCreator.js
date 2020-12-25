const special = require('../groups/special');
const positioning = require('../groups/positioning');
const boxModel = require('../groups/boxModel');
const typography = require('../groups/typography');
const visual = require('../groups/visual');
const animation = require('../groups/animation');
const misc = require('../groups/misc');

exports.groupSettings = ({
  'border-in-box-model': borderInBoxModel = false,
  'empty-line-between-groups': emptyLineBefore,
  'empty-lines-within-groups': emptyLinesWithinGroups,
  'property-order': order,
} = {}) =>
  [
    ['Special', special],
    ['Positioning', positioning],
    ['Box Model', boxModel({ border: borderInBoxModel })],
    ['Typography', typography],
    ['Visual', visual({ border: !borderInBoxModel })],
    ['Animation', animation],
    ['Misc', misc],
  ].map(([groupName, properties]) => ({
    emptyLineBefore,
    noEmptyLineBetween: emptyLinesWithinGroups === false,
    properties,
    groupName,
    order,
  }));

exports.secondarySettings = ({
  'disable-fix': disableFix,
  'empty-line-before-unspecified': emptyLineBeforeBeforeUnspecified,
  'empty-line-property-threshold': emptyLineMinimumPropertyThreshold,
  'property-order': propertyOrder,
  unspecified,
} = {}) => ({
  disableFix,
  emptyLineBeforeBeforeUnspecified,
  emptyLineMinimumPropertyThreshold,
  propertyOrder,
  unspecified,
});
