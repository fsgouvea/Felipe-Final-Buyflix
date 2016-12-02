var Gmap = React.createClass({
 render: function() {
   return (
     <div className="map col-sm-12">
       <Gmaps width={'100%'}
              height={'480px'}
              lat={'41.9021988'}
              lng={'-87.6285782'}
              zoom={11}
              loadingMessage={'So soon...'}
              params={{v: '3.exp', key: 'AIzaSyB3p_xQIXsFMDGLYNEiVkgW5fsVSUOd01c'}}>
         {tacos.map(function(place) {
           return <Marker key = {place.name} lat={place.lat} lng={place.long} />
         })}
           <Marker lat='41.9021988' lng='-87.6285782'/>
       </Gmaps>
     </div>
   )
 }
})
