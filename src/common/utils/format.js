export const formatNumber = (raw,qtUpdate) => {
    let priceT
    if (qtUpdate) {
        priceT = raw * qtUpdate
        return new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "COP",
        })
          .format(priceT)
          .replace(",00", "")
          .replace("COP", "")
    }else{
        return new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "COP",
        })
          .format(raw)
          .replace(",00", "")
          .replace("COP", "")
    }
  }