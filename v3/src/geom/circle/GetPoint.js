var CircumferencePoint = require('./CircumferencePoint');
var FromPercent = require('../../math/FromPercent');
var MATH_CONST = require('../../math/const');
var Point = require('../point/Point');

//  Returns a Point object containing the coordinates of a point on the circumference of the Circle 
//  based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
//  at 180 degrees around the circle.

/**
 * [description]
 *
 * @function Phaser.Geom.Circle.GetPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference point on.
 * @param {float} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
 * @param {Phaser.Geom.Point|object} [out] - [description]
 *
 * @return {Phaser.Geom.Point|object} [description]
 */
var GetPoint = function (circle, position, out)
{
    if (out === undefined) { out = new Point(); }

    var angle = FromPercent(position, 0, MATH_CONST.PI2);

    return CircumferencePoint(circle, angle, out);
};

module.exports = GetPoint;