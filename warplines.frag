#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    color = vec3(sin(
        uv.x * 50.0
        + cos(u_time + uv.y * 10.0 + sin(uv.x * 50.0 + u_time * 2.0))
    )) * 2.0;
    
    color += vec3(cos(
        uv.x * 20.0
        + sin(u_time + uv.y * 10.0 + cos(uv.x * 50.0 + u_time * 2.0))
    )) * 2.0;

     color = vec3(sin(
        uv.x * 30.0
        + cos(u_time + uv.y * 10.0 + sin(uv.x * 50.0 + u_time * 2.0))
    )) * 2.0;
    
    color += vec3(cos(
        uv.x * 10.0
        + sin(u_time + uv.y * 10.0 + cos(uv.x * 50.0 + u_time * 2.0))
    )) * 2.0;

    color += vec3(uv.y, uv.x, 0.0);

    gl_FragColor = vec4(color, 1.0);
}