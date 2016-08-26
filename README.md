# sofiasys
Apple System Sales
Proposed Project Directory Structure: sofiasys

/certs/
/scripts/
/auth/
/.git/
/_webroot/
  | - run.py
  | - /config/
  |        |- __init__.py
  |        |- dev.py
  |        |- qc.py
  |        |- prod.py
  |
  | - /instance/
  |        | - config.py
  | 
  | - /py_mod_reqs/
  |     | - reqs_dev.txt
  |     | - reqs_qc.txt
  |     | - reqs_prod.txt
  |
  | - /sofiasys/
           | - __init__.py
           | - models.py
           | - views.py
           | - /templates/
           | - /static/
                  | - /legacy/

