
import * as types from './mutation-types'

[types.GET_SERVICE_LIST] = ({state},outerData) => {
    state.service = outerData;
}
module.exports = types

