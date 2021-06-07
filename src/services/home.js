import { URL } from '../environment/environment';

export function getMenuList() {
  return fetch(URL+'menu/get').then(data => data.json())
}

