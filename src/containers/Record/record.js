// historial de horas cargadas
// horas cargadas:
// fecha:
// proyecto:

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

import { styles } from './styles';

export default class records extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Proyecto', 'Horas cargadas', 'Fecha de carga'],
      tableData: [
        ['Lagash University', '8 hrs', '17-01-2020, 8:35:56'],
        ['Lagash University', '8 hrs', '16-01-2020, 8:35:56'],
        ['Lagash University', '8 hrs', '15-01-2020, 8:35:56']
      ]
    };
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  render() {
    const { state } = this;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row
            data={state.tableHead}
            style={styles.head}
            textStyle={styles.text}
          />
          {state.tableData.map((rowData, index) => (
            <TableWrapper key={index} style={styles.row}>
              {rowData.map((cellData, cellIndex) => (
                <Cell
                  key={cellIndex}
                  data={cellIndex === 3 ? element(cellData, index) : cellData}
                  textStyle={styles.text}
                />
              ))}
            </TableWrapper>
          ))}
        </Table>
      </View>
    );
  }
}
