import { VIEW_OFFER } from "../context/offerContext"

export const viewOffer = (offer) => {
    return {
        type: VIEW_OFFER,
        payload: offer,
    }
}