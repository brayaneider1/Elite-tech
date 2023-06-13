const { Commerce } = require("@chec/commerce.js");

exports.handler = async (event, context) => {
  const { body } = event;
  const { type, data } = JSON.parse(body);

  // Crea una instancia de la clase Commerce con tu clave pública
  const commerce = new Commerce(process.env.GATSBY_CHEC_PUBLIC_KEY);

  if (type === "order.paid") {
    // Obtiene los detalles del pedido que se ha pagado
    const order = await commerce.orders.retrieve(data.id);
    console.log(`El pedido ${order.id} ha sido pagado`);
  } else if (type === "inventory.updated") {
    // Actualiza el stock de un producto
    const productId = data.product_id;
    const inventory = data.inventory;
    await commerce.products.update(productId, { inventory });
    console.log(`El inventario del producto ${productId} ha sido actualizado`);
  } else {
    console.log(`Evento ${type} no manejado`);
  }

  return {
    statusCode: 200,
    body: "Evento manejado con éxito",
  };
};
