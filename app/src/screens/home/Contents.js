import React, { Component } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { connect } from 'react-redux'

export class Contents extends Component {
    state={

    }

    render() {
        return (
            <View style={styles.container}>
                <Text> No history found </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#eee'
    }
})

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Contents)