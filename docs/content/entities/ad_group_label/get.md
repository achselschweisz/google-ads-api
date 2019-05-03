---
title: Get AdGroupLabel
order: 2
type: get
entity: AdGroupLabel
---

### Get an AdGroupLabel

The `customer.adGroupLabels.get(resource_name)` method returns the AdGroupLabel identified by a resource_name.

_Note_: This function is heavily rate-limited by Google, so avoid using it in production.

#### Arguments

- **`resource_name`** (_required_): The resource_name of that AdGroupLabel

#### Returns

Returns that AdGroupLabel as an object.