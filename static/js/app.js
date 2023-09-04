let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
d3.json(url).then(function (data) {
    //console.log(data);
    build_chart(data.names[0])
})

function combo_box(data, id){
for(let i=0;i<data.names.length;i++){
    
    if(names[i]==id){
      break;  
    }

}
    meta_data=data.metadata[i];

}
function build_chart(id) {

    d3.json(url).then(function (data) {
        samples = data.samples;
        for (i = 0; i < samples.length; i++) {
            if (samples[i].id == id) {
                break;
            }

        }
        meta_data=data.metadata[i];
        let medative=document.getElementById("sample-metadata");
        medative.innerHTML="";
    
        for (const property in meta_data) {
            let el=document.createElement("p");
            el.innerText=property+" : " +meta_data[property];
            medative.appendChild(el);
        }
        otu_ids = samples[i].otu_ids.slice(0, 10).map(x => "otu " + x);
        otu_labels = samples[i].otu_labels.slice(0, 10);
        sample_values = samples[i].sample_values.slice(0, 10);
        console.log(otu_ids);
        console.log(otu_labels);
        console.log(sample_values);


        let trace1 = {
            x: sample_values.reverse(),
            y: otu_ids.reverse(),
            text: otu_labels.reverse(),
            name: "Greek",
            type: "bar",
            orientation: "h"
        };

        // Data array
        let trace_data = [trace1];

        // Apply a title to the layout
        let layout = {
            title: "Results",
            margin: {
                l: 150,
                t: 30,
            }
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bar", trace_data, layout);

        otu_ids = samples[i].otu_ids.map(x => "otu " + x);
        otu_labels = samples[i].otu_labels;
        sample_values = samples[i].sample_values;
        console.log(otu_ids);
        console.log(otu_labels);
        console.log(sample_values);


        trace1 = {
            x: otu_ids,
            y: sample_values,
            
            mode: "markers",
            marker: {
              size: sample_values, 
              color: sample_values,
              colorscale: "Earth"
            }
        
            

        };

        // Data array
        trace_data = [trace1];

        // Apply a title to the layout
        layout = {
            title: "Results",
            margin: {
                l: 150,
                t: 30,
            }
        };

        // Render the plot to the div tag with id "plot"
        Plotly.newPlot("bubble", trace_data, layout);


    })

}

