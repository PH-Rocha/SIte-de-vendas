module.exports = (sequelize, Sequelize) => {
  const Pedido = sequelize.define('pedido', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    clienteId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    data: {
      type: Sequelize.DATATIME,
      allowNull: false
    },
    formaDePagamento: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Cliente);
  };

  Pedido.associate = (models) => {
    Pedido.hasMany(models.PedidoItem, {
      foreignKey: 'pedidoId'
    });
  };
  
  return Pedido;
};