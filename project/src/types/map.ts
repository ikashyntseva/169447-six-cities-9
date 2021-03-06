export type Location = {
  latitude: number
  longitude: number
  zoom: number
}

export type City = {
  location: Location
  name: string
}

export type MapRef = {
  current: HTMLElement | null
}

