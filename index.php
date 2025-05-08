<?php
$conn = new mysqli("localhost", "root", "", "productos");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT idproducto, nombre, precio FROM Bebidas";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>IdProducto</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["idproducto"] . "</td>
                <td>" . $row["nombre"] . "</td>
                <td>" . $row["precio"] . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No se encontraron registros";
}

$conn->close();
?>

<?php
$conn = new mysqli("localhost", "root", "", "productos");

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$sql = "SELECT idproducto, nombre, precio FROM Snacks";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table border='1'>
            <tr>
                <th>IdProducto</th>
                <th>Nombre</th>
                <th>Precio</th>
            </tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row["idproducto"] . "</td>
                <td>" . $row["nombre"] . "</td>
                <td>" . $row["precio"] . "</td>
              </tr>";
    }

    echo "</table>";
} else {
    echo "No se encontraron registros";
}

$conn->close();
?>
