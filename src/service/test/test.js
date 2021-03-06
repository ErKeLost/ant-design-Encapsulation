import AdnyRequest from '@/service'

export function getPageData (url, data) {
  return AdnyRequest.post({
    url,
    data
  })
}

export function newPageData (url, data) {
  return AdnyRequest.post({
    url,
    data
  })
}

export function getCategoryGoodsCount (url, data) {
  return AdnyRequest.get({
    url: '/goods/category/count'
  })
}
export function getCategoryGoodsSale (url, data) {
  return AdnyRequest.get({
    url: '/goods/category/sale'
  })
}
export function getCategoryGoodsFavor (url, data) {
  return AdnyRequest.get({
    url: '/goods/category/favor'
  })
}

export function getPageList (query) {
  return AdnyRequest.post({
    url: '/users/list',
    data: query
  })
}
export function editPageData (url, editData) {
  return AdnyRequest.patch({
    url,
    data: editData
  })
}
