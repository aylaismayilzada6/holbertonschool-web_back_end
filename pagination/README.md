# Pagination

This project implements different pagination techniques in Python using a dataset of popular baby names.

## Tasks

### 0. Simple Helper Function

Implemented `index_range(page, page_size)` to calculate the start and end indexes for a given page.

### 1. Simple Pagination

Implemented `get_page()` to return a specific page of data from the dataset while validating input parameters.

### 2. Hypermedia Pagination

Implemented `get_hyper()` to provide pagination metadata, including current page, page size, previous page, next page, total pages, and page data.

### 3. Deletion-Resilient Pagination

Implemented `get_hyper_index()` to support pagination even when records are deleted from the dataset, ensuring users do not miss any items between requests.

## Technologies

* Python 3
* CSV module
* Type annotations

## Learning Objectives

* Understand pagination concepts.
* Implement page-based and hypermedia pagination.
* Handle dataset changes during pagination.
* Work with cached datasets and indexed data structures.

