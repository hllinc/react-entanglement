/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-10 17:53
 */
import Mock from 'mockjs'

const domain = '/api/'

// 模拟getData接口
Mock.mock(domain + 'getData', function () {
    let result = {
        code: '200',
        message: 'OK',
        data: 'test'
    }
    return result
})
