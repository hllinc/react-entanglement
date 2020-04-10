/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-10 16:35
 */
import * as constants from './constants'

export const setData = (data) => ({
    type: constants.SET_DATA,
    data
})
