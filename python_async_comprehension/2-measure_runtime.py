#!/usr/bin/env python3
"""Module for async measuring runtime"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure runtime function"""
    tasks = [async_comprehension() for _ in range(10)]
    start_time = time.perf_counter()
    await asyncio.gather(*tasks)
    end_time = time.perf_counter()

    return end_time - start_time
