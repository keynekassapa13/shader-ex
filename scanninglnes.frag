#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size (width, height)
uniform float u_time;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(1.0);

    float size = 20.0;
    float alpha = sin(floor(uv.x * size) - u_time * 3.0);
    
    gl_FragColor = vec4(color, alpha);
}