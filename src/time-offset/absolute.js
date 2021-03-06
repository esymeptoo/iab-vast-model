import { TimeOffset } from './base'

/**
 * Represents a time offset expressed as an absolute duration in seconds.
 *
 * @class AbsoluteTimeOffset
 * @extends TimeOffset
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class AbsoluteTimeOffset extends TimeOffset {
  get $type () {
    return 'AbsoluteTimeOffset'
  }
}
