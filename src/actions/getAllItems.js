export const GET_ITEMS = 'GET_ITEMS'

export function getAllItems (items) {
  return {
    type: GET_ITEMS,
    items,
  }
}