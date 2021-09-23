/*
 * File: GpuBlock.tsx
 * Project: watcher
 * File Created: Thursday, 23rd September 2021 3:56:21 am
 * Author: Umar Aamer (umaraamer@gmail.com)
 * -----
 * Last Modified: Thursday, 23rd September 2021 3:56:22 am
 * -----
 * Copyright 2020 - 2021 WhileGeek, https://umar.tech
 */

export const GpuBlock = ({ gpu, title }) => {
  const _formatHash = (gpu) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.format(gpu?.hashrate * 0.000001);
  };

  if (!gpu) {
    return <p>{title} is Offline</p>;
  }

  const {gpus} = gpu;

  const gpuInfo = gpus[0]

  const {memory_temperature, temperature} = gpuInfo;

  return (
    <>
      <h3 style={{marginVertical: -10}}>
        {title}: {_formatHash(gpu)} Mh/s
        {" " + temperature}C 
        {
          memory_temperature ? ` [${memory_temperature}C]` : null
        }
      </h3>
     
      
    </>
  );
};